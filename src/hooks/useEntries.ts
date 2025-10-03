import { useEffect, useState } from 'react';
import { KnowledgeEntry } from '../types';
import * as api from '../api/knowledge';

export function useEntries() {
  const [entries, setEntries] = useState<KnowledgeEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getEntries().then(data => {
      setEntries(data);
      setLoading(false);
    });
  }, []);

  const addEntry = async (entry: Omit<KnowledgeEntry, 'id'>) => {
    const newEntry = await api.createEntry(entry);
    setEntries(prev => [...prev, newEntry]);
  };

  const editEntry = async (id: number, entry: Partial<KnowledgeEntry>) => {
    const updated = await api.updateEntry(id, entry);
    setEntries(prev => prev.map(e => (e.id === id ? updated : e)));
  };

  const removeEntry = async (id: number) => {
    await api.deleteEntry(id);
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  return { entries, loading, addEntry, editEntry, removeEntry };
}