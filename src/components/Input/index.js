import React from 'react';

import { CustomInput } from './styles';

export default function Input({ placeholder, type }) {
  return <CustomInput type={type} placeholder={placeholder} />;
}
