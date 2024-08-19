import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function Filter({ label, value, onChange, options }) {
    return (
        <FormControl sx={{ width: 200 }} margin="normal">
            <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
            <Select
                labelId={`${label}-select-label`}
                value={value}
                onChange={onChange}
                label={label}
            >
                <MenuItem value="">
                    <em>All {label}s</em>
                </MenuItem>
                {options.map(option => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
};
