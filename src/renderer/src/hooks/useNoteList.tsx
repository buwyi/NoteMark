import { notesAtom, selectedNoteIndexAtom } from '@renderer/store';
import { useAtom, useAtomValue } from 'jotai';

export const useNoteList = ({ onSelect }: { onSelect?: () => void }) => {
  const notes = useAtomValue(notesAtom);
  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteIndexAtom);

  const handleNoteSelect = (index: number) => {
    return async () => {
      setSelectedNoteIndex(index);
      if (onSelect) {
        onSelect();
      }
    };
  };

  return {
    notes,
    selectedNoteIndex,
    handleNoteSelect,
  };
};
