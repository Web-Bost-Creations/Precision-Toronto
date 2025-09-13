'use client';

import { useState, useEffect } from 'react';
import { Plus, Check, Edit2, Trash2, Calendar, Clock, ArrowRight, Instagram, Menu, X, MapPin, MessageCircle, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  priority: 'low' | 'medium' | 'high';
}

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos) as Array<{
          id: string;
          text: string;
          completed: boolean;
          createdAt: string;
          priority: 'low' | 'medium' | 'high';
        }>;
        const todosWithDates = parsedTodos.map((todo) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        }));
        setTodos(todosWithDates);
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      // Split by comma and filter out empty strings
      const todoTexts = newTodo.split(',').map(text => text.trim()).filter(text => text.length > 0);
      
      if (todoTexts.length > 0) {
        const newTodos: Todo[] = todoTexts.map((text, index) => ({
          id: (Date.now() + index).toString(), // Add index to ensure unique IDs
          text: text,
          completed: false,
          createdAt: new Date(),
          priority
        }));
        
        setTodos([...newTodos, ...todos]);
        setNewTodo('');
        setPriority('medium');
      }
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditing = (id: string, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };

  const saveEdit = () => {
    if (editingText.trim()) {
      setTodos(todos.map(todo => 
        todo.id === editingId ? { ...todo, text: editingText.trim() } : todo
      ));
    }
    setEditingId(null);
    setEditingText('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingText('');
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  }).sort((a, b) => {
    // Sort by priority: High -> Medium -> Low
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    const aPriority = priorityOrder[a.priority];
    const bPriority = priorityOrder[b.priority];
    
    // If priorities are the same, sort by creation date (newest first)
    if (aPriority === bPriority) {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    
    return bPriority - aPriority;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-900/20 border-red-500/30';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'low': return 'text-green-400 bg-green-900/20 border-green-500/30';
      default: return 'text-blue-400 bg-blue-900/20 border-blue-500/30';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return '🔴';
      case 'medium': return '🟡';
      case 'low': return '🟢';
      default: return '🔵';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100">
      {/* Navbar */}
      <nav className={`fixed opacity-95 top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" />
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <Image
                src="https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBq5eGX9YsNxfujw0v69PZOBH1Sc7DQnRGkaFE"
                alt="Barrie's Mobile Detailing"
                className="w-16 h-12 transform scale-150"
                width={64}
                height={64}
                unoptimized
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { text: 'Home', path: '/' },
                { text: 'About', path: '/about' },
                { text: 'Past Work', path: '/past-work' },
                { text: 'Todos', path: '/todos' }
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.path}
                  className="text-gray-300 hover:text-white transition-colors relative group"
                >
                  {item.text}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href='/contact'>
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-medium hover:opacity-90 transition-all flex items-center gap-2 group">
                  BOOK NOW!
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-10 p-2 glass-card rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {[
                { text: 'Home', path: '/' },
                { text: 'About', path: '/about' },
                { text: 'Past Work', path: '/past-work' },
                { text: 'Todos', path: '/todos' }
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.path}
                  className="block py-2 text-gray-300 hover:text-white transition-colors"
                >
                  {item.text}
                </a>
              ))}
              <div className="pt-4 space-y-4">
                <a href='/contact'>
                  <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium hover:opacity-90 transition-all">
                    Book Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in gradient-text">
              Todo List
            </h1>
            <p className="text-xl text-gray-300 mb-8 fade-in max-w-2xl mx-auto">
              Stay organized and productive with our beautiful todo management system
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        {/* Add Todo Form */}
        <div className="glass-card rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                placeholder="What needs to be done? (Separate multiple items with commas)"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
                className="px-4 py-3 bg-gray-800/50 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
              <button
                onClick={addTodo}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:opacity-90 transition-all flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Todo
              </button>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { key: 'all', label: 'All', count: todos.length },
            { key: 'active', label: 'Active', count: todos.filter(t => !t.completed).length },
            { key: 'completed', label: 'Completed', count: todos.filter(t => t.completed).length }
          ].map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setFilter(key as 'all' | 'active' | 'completed')}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filter === key
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>

        {/* Todo List */}
        <div className="space-y-4">
          {filteredTodos.length === 0 ? (
            <div className="glass-card rounded-2xl p-12 text-center">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold mb-2 gradient-text">
                {filter === 'all' ? 'No todos yet' : 
                 filter === 'active' ? 'No active todos' : 'No completed todos'}
              </h3>
              <p className="text-gray-400">
                {filter === 'all' ? 'Add your first todo above to get started!' :
                 filter === 'active' ? 'All your todos are completed! 🎉' : 'Complete some todos to see them here.'}
              </p>
            </div>
          ) : (
            filteredTodos.map((todo, index) => (
              <div
                key={todo.id}
                className={`glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 ${
                  todo.completed ? 'opacity-75' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      todo.completed
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 border-green-500'
                        : 'border-gray-400 hover:border-blue-500'
                    }`}
                  >
                    {todo.completed && <Check className="w-4 h-4 text-white" />}
                  </button>

                  {/* Todo Content */}
                  <div className="flex-1 min-w-0">
                    {editingId === todo.id ? (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={editingText}
                          onChange={(e) => setEditingText(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && saveEdit()}
                          className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          autoFocus
                        />
                        <button
                          onClick={saveEdit}
                          className="px-3 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="px-3 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <p className={`text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-white'}`}>
                          {todo.text}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {todo.createdAt.toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {todo.createdAt.toLocaleTimeString()}
                          </div>
                          <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(todo.priority)}`}>
                            {getPriorityIcon(todo.priority)} {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)} Priority
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  {editingId !== todo.id && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEditing(todo.id, todo.text)}
                        className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Stats */}
        {todos.length > 0 && (
          <div className="mt-8 glass-card rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text">{todos.length}</div>
                <div className="text-gray-400">Total Todos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">
                  {todos.filter(t => t.completed).length}
                </div>
                <div className="text-gray-400">Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">
                  {todos.filter(t => !t.completed).length}
                </div>
                <div className="text-gray-400">Remaining</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="relative pt-24 pb-12 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">
                Barrie&apos;s Mobile Detailing
              </h3>
              <p className="text-gray-400">
                Barrie&apos;s premier mobile detailing services
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/precision.to/" className="glass-card p-2 rounded-full hover:bg-white/10 transition-all">
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-blue-400" />
                </a>
              </div>
            </div>

            {/* Main */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Main</h4>
              <ul className="space-y-3">
                {[
                  { text: 'Home', path: '/' },
                  { text: 'Past Work', path: '/past-work' },
                  { text: 'Todos', path: '/todos' }
                ].map(({ text, path }) => (
                  <li key={text}>
                    <a href={path} className="text-gray-400 hover:text-blue-400 transition-colors">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Company</h4>
              <ul className="space-y-3">
                {[
                  { text: 'About Us', path: '/about' },
                  { text: 'Contact', path: '/contact' }
                ].map(({ text, path }) => (
                  <li key={text}>
                    <a href={path} className="text-gray-400 hover:text-blue-400 transition-colors">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">Barrie, ON</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">(249) 877-5640</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">info@barriesdetailing.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Barrie&apos;s Mobile Detailing. All rights reserved.
              </p>
              <div className="flex gap-1">
                {['Made By Web Boost Creations'].map((item) => (
                  <a
                    key={item}
                    href="https://webboostcreations.com/"
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
