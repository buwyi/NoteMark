import { NoteInfo } from '@shared/models';
import { atom } from 'jotai';
import { notesMock } from './mock';

export const notesAtom = atom<NoteInfo[]>(notesMock);

export const selectedNoteIndexAtom = atom<number | null>(null);

export const selectedNoteAtom = atom((get) => {
  const notes = get(notesAtom);
  const selectedNoteIndex = get(selectedNoteIndexAtom);

  if (selectedNoteIndex === null) return null;

  const selectedNote = notes[selectedNoteIndex];

  return {
    ...selectedNote,
    content: `Hello from Note${selectedNoteIndex}`,
  };
});

export const createEmptyNoteAtom = atom(null, (get, set) => {
  const notes = get(notesAtom);

  const title = `Note ${notes.length - 1}`;

  const newNote: NoteInfo = {
    title,
    lastEditTime: Date.now(),
  };

  set(notesAtom, [newNote, ...notes.filter((item) => item.title !== newNote.title)]);
  set(selectedNoteIndexAtom, 0);
});

export const deleteNoteAtom = atom(null, (get, set) => {
  const notes = get(notesAtom);
  const selectedNote = get(selectedNoteAtom);
  if (selectedNote === null) return;
  set(
    notesAtom,
    notes.filter(
      (item) => item.title + item.lastEditTime !== selectedNote.title + selectedNote.lastEditTime,
    ),
  );
  set(selectedNoteIndexAtom, null);
});
