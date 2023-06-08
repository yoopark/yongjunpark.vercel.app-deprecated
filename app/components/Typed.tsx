'use client';

import { useEffect, useState } from 'react';

export const Typed = ({ strings }: { strings: string[] }) => {
  const [fullText, setFullText] = useState<string>(
    !!strings.length ? strings[0] : ''
  );
  const [fullTextIndex, setFullTextIndex] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  const [isIncreasing, setIsIncreasing] = useState<boolean>(true);

  useEffect(() => {
    if (isIncreasing) {
      if (index < fullText.length) {
        setTimeout(() => {
          setText(text + fullText[index]);
          setIndex(index + 1);
        }, 120);
      } else {
        setTimeout(() => {
          setIndex(fullText.length - 1);
          setIsIncreasing(false);
        }, 1200);
      }
    } else {
      if (index > -1) {
        setTimeout(() => {
          setText(text.slice(0, -1));
          setIndex(index - 1);
        }, 120);
      } else {
        setTimeout(() => {
          setIndex(0);
          setFullText(strings[(fullTextIndex + 1) % strings.length]);
          setFullTextIndex(fullTextIndex + 1);
          setIsIncreasing(true);
        }, 1200);
      }
    }
  }, [
    fullTextIndex,
    setFullTextIndex,
    index,
    setIndex,
    text,
    setText,
    fullText,
    setFullText,
    strings,
    isIncreasing,
  ]);

  return <span>{text}</span>;
};
