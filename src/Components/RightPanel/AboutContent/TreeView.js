import * as React from 'react';
import Box from '@mui/material/Box';
import './AboutContainer.css';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';


const MUI_X_PRODUCTS = [
  {
    id: 'KnowMe',
    label: 'Know More About Me',
    children: [
      { id: 'Know Me', label: 'I am Ashwini Patil, a postgraduate in Advanced Computing from CDAC TVM from Mumbai, and post graduate from SSBT COET jalgaon.  I am passionate about building innovative software solutions and continuously learning new technologies.' },
    ],
  },
  {
    id: 'Email',
    label: 'Email',
    children: [
      { id: 'email', label: 'ashwini.patil012000@gmail.com' },
    ],
  },
  {
    id: 'Mobile',
    label: 'Mobile No',
    children: [{ id: 'mobile', label: '7261987321' }],
  },
  {
    id: 'C',
    label: 'City ',
    children: [{ id: 'City', label: 'Navi Mumbai' }],
  },
];

 const TreeView=()=> {
  return (
    <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <RichTreeView  items={MUI_X_PRODUCTS} />
    </Box>
  );
}

export default TreeView;
