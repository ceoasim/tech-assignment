import React, { useState } from "react";
import { KnowledgeEntry } from "../types";

type Props = {
  onSave: (entry: Omit<KnowledgeEntry, "id">) => void;
  editingEntry?: KnowledgeEntry | null;
  onCancel?: () => void;
};

const EntryForm: React.FC<Props> = ({ onSave, editingEntry, onCancel }) => {
  const [title, setTitle] = useState(editingEntry ? editingEntry.title : "");
  const [description, setDescription] = useState(editingEntry ? editingEntry.description : "");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | undefined>(editingEntry?.imageUrl);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSave({ title, description, imageUrl: preview });
    setTitle("");
    setDescription("");
    setImage(null);
    setPreview(undefined);
  }

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded p-4 mb-4 flex flex-col gap-2">
      <input
        className="border p-2 rounded"
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        maxLength={60}
      />
      <textarea
        className="border p-2 rounded"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
        maxLength={250}
      />
      <input
        className="border p-2 rounded"
        type="file"
        accept="image/*"
        onChange={handleImage}
      />
      {preview && (
        <img src={preview} className="h-24 object-cover rounded my-2" alt="Preview" />
      )}
      <div className="flex gap-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
          {editingEntry ? "Update" : "Add"} Entry
        </button>
        {editingEntry && onCancel &&
          <button type="button" className="bg-gray-300 px-4 py-2 rounded" onClick={onCancel}>Cancel</button>
        }
      </div>
    </form>
  );
};

export default EntryForm;