import { useEffect, useState } from 'react';

interface AnimatedListProps {
  entries: string[];
  show: boolean;
}

const AnimatedList = ({ entries, show }: AnimatedListProps) => {
  const [visibleEntries, setVisibleEntries] = useState<string[]>([]);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (show) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < entries.length) {
          setVisibleEntries((prev) => [...prev, entries[i]]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 900); // each new item waits for prior one to finish
    } else {
      // Begin bubble-out animation
      setExiting(true);
      const timeout = setTimeout(() => {
        setVisibleEntries([]);
        setExiting(false);
      }, 500); // match bubble-out duration
      return () => clearTimeout(timeout);
    }
  }, [show, entries]);

  return (
    <div className="entry-list">
      {visibleEntries.map((entry, idx) => (
        <div
          key={entry + idx}
          className={`entry ${exiting ? 'bubble-out' : 'bubble-in'}`}
        >
          {entry}
        </div>
      ))}
    </div>
  );
};

export default AnimatedList; 