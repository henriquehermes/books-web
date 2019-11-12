import React from 'react';

import CustomButton from './styles';

export default function Button({ label, secondary }) {
  return <CustomButton secondary={secondary}>{label}</CustomButton>;
}
