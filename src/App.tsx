import React from "react";
import { useEntries } from "./hooks/useEntries";
import EntryList from "./components/EntryList";

function App() {
  const {
    entries,
    loading,
    addEntry,
    editEntry,
    removeEntry
  } = useEntries();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-2 sm:p-8">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">Knowledge Capture Dashboard</h1>
        <p className="mb-4 text-sm text-gray-600">Mobile-first knowledge capture for manufacturing technicians.</p>
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : (
          <EntryList
            entries={entries}
            onAdd={addEntry}
            onUpdate={editEntry}
            onDelete={removeEntry}
          />
        )}
      </div>
    </div>
  );
}

export default App;