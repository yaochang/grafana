import React, { PureComponent } from 'react';

import { TextMatch } from 'app/types/explore';

interface MatchedTextProps {
  matches?: TextMatch[];
  matchClassName?: string;
  showTitle?: boolean;
  text: string;
}

export default class MatchedText extends PureComponent<MatchedTextProps, {}> {
  render() {
    const { matchClassName = '', matches, showTitle = false, text } = this.props;
    if (matches && matches.length > 0) {
      let lastMatchEnd = 0;
      const spans = matches.reduce((acc, match, i) => {
        // Insert non-match
        if (match.start !== lastMatchEnd) {
          acc.push(<>{text.slice(lastMatchEnd, match.start)}</>);
        }
        // Match
        const title = showTitle ? `Matching expression: ${match.text}` : undefined;
        acc.push(
          <span className={matchClassName} title={title}>
            {text.substr(match.start, match.length)}
          </span>
        );
        lastMatchEnd = match.start + match.length;
        // Non-matching end
        if (i === matches.length - 1) {
          acc.push(<>{text.slice(lastMatchEnd)}</>);
        }
        return acc;
      }, []);
      return <>{spans}</>;
    }
    return <>{text}</>;
  }
}
