import React from "react";
import { KnowledgeEntry } from "../types";

type Props = {
  entry: KnowledgeEntry;
  onEdit: () => void;
  onDelete: () => void;
};

const EntryItem: React.FC<Props> = ({ entry, onEdit, onDelete }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b">
    <div className="flex-1">
      <h3 className="font-semibold">{entry.title}</h3>
      <p className="text-sm text-gray-700">{entry.description}</p>
      {entry.imageUrl && <img src={entry.imageUrl} className="w-20 my-2 rounded" alt="" />}
    </div>
    <div className="flex gap-2 mt-2 sm:mt-0">
      <button onClick={onEdit} className="text-blue-600 hover:underline">Edit</button>
      <button onClick={onDelete} className="text-red-600 hover:underline">Delete</button>
    </div>
  </div>
);

export default EntryItem;