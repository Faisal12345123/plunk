import React from 'react';

export interface BadgeProps {
  type: 'info' | 'danger' | 'warning' | 'success' | 'purple';
  children: string;
}

const styles = {
  info: 'bg-primary-100 text-primary-800 border border-primary-200',
  danger: 'bg-red-100 text-red-800 border border-red-200',
  warning: 'bg-accent-100 text-accent-800 border border-accent-200',
  success: 'bg-success-100 text-success-800 border border-success-200',
  purple: 'bg-secondary-100 text-secondary-800 border border-secondary-200',
};

/**
 * @param root0
 * @param root0.type
 * @param root0.children
 */
export default function Badge({type = 'info', children}: BadgeProps) {
  const classNames = ['inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold shadow-sm'];
  classNames.push(styles[type]);

  return <span className={classNames.join(' ')}>{children}</span>;
}
