import * as React from 'react';
export interface ResultProps {
  type: 'success' | 'error';
  title: React.ReactNode;
  description?: React.ReactNode;
  extra?: React.ReactNode;
  actions?: React.ReactNode;
  style?: React.CSSProperties;
}

export default class Result extends React.Component<ResultProps, any> {}
