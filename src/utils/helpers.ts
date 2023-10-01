import {createNavigationContainerRef} from '@react-navigation/native';
import removeMarkdown from 'markdown-to-text';

export const navigationRef = createNavigationContainerRef();

export const markdownToText = (x: string): string => {
  const result = removeMarkdown(x)
    .replace(/(\r\n|\n|\r)/gm, '')
    .replace(/  +/g, ' ');

  return result;
};
