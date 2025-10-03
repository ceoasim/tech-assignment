import React, { useState } from "react";
import EntryForm from "./EntryForm";
import EntryItem from "./EntryItem";
import { KnowledgeEntry } from "../types";

type Props = {
  entries: KnowledgeEntry[];
  onAdd: (entry: Omit<KnowledgeEntry, "id">) => void;
  onUpdate: (id: number, entry: Partial<KnowledgeEntry>) => void;
  onDelete: (id: number) => void;
};

const EntryList: React.FC<Props> = ({ entries, onAdd, onUpdate, onDelete }) => {
  const [editing, setEditing] = useState<KnowledgeEntry | null>(null);

  function handleEdit(entry: KnowledgeEntry) {
    setEditing(entry);
  }
  function handleCancel() {
    setEditing(null);
  }
  function handleUpdate(entry: Omit<KnowledgeEntry, 'id'>) {
    if (editing) {
      onUpdate(editing.id, entry);
      setEditing(null);
    }
  }

  return (
    <>
      <EntryForm onSave={editing ? handleUpdate : onAdd} editingEntry={editing ?? undefined} onCancel={handleCancel} />
      <div className="bg-white rounded shadow mt-3 divide-y">
        {entries.length === 0 && <div className="text-center p-4 text-gray-500">No knowledge entries added.</div>}
        {entries.map(e => (
          <EntryItem key={e.id} entry={e}
            onEdit={() => handleEdit(e)}
            onDelete={() => onDelete(e.id)}
          />
        ))}
      </div>
    </>
  );
};

export default EntryList;