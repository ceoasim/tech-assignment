import axios from 'axios';
import { KnowledgeEntry } from '../types';

const API_URL = 'http://localhost:4000/entries';

export const getEntries = async (): Promise<KnowledgeEntry[]> =>
  (await axios.get(API_URL)).data;

export const createEntry = async (entry: Omit<KnowledgeEntry, 'id'>): Promise<KnowledgeEntry> =>
  (await axios.post(API_URL, entry)).data;

export const updateEntry = async (id: number, entry: Partial<KnowledgeEntry>): Promise<KnowledgeEntry> =>
  (await axios.patch(`${API_URL}/${id}`, entry)).data;

export const deleteEntry = async (id: number): Promise<void> =>
  await axios.delete(`${API_URL}/${id}`);