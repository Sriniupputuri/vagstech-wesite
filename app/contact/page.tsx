"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Here you would typically send this to your API endpoint
      // For demo purposes, we'll just show a success message
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setEmail('');
      setMessage('');
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-[var(--dark-color)] mb-8 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Have a question or want to work together? Send us a message!
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full h-32"
              placeholder="How can we help you?"
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-[var(--dark-color)] hover:bg-[var(--hover-color)]"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}