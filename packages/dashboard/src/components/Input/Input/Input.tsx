import {FieldError, UseFormRegisterReturn} from 'react-hook-form';
import {AnimatePresence, motion} from 'framer-motion';
import React from 'react';

export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  register: UseFormRegisterReturn;
  error?: FieldError;
  className?: string;
  min?: number;
  max?: number;
}

/**
 *
 * @param props
 * @param props.label
 * @param props.type
 * @param props.register
 * @param props.error
 * @param props.placeholder
 * @param props.className
 */
export default function Input(props: InputProps) {
  return (
    <div className={props.className}>
      <label className="block text-sm font-semibold text-neutral-700 mb-2">{props.label}</label>
      <div className="relative">
        <input
          autoComplete={'off'}
          type={props.type}
          min={props.type === 'number' ? props.min : undefined}
          max={props.type === 'number' ? props.max : undefined}
          className={
            'block w-full px-4 py-3 rounded-xl border-2 border-neutral-200 bg-neutral-50/50 transition-all duration-200 ease-in-out focus:border-primary-400 focus:ring-4 focus:ring-primary-100 focus:bg-white hover:border-neutral-300 sm:text-sm font-medium placeholder-neutral-400'
          }
          placeholder={props.placeholder}
          {...props.register}
        />
      </div>
      <AnimatePresence>
        {props.error && (
          <motion.p
            initial={{height: 0}}
            animate={{height: 'auto'}}
            exit={{height: 0}}
            className="mt-1 text-xs text-red-500"
          >
            {props.error.message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
