// import React from "react"
// import { BlankButton } from "../styledComponents"
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { TextField } from "@mui/material";



// export default function FilterOptions() {



// return (
//     <ul>
//         <li><BlankButton><FilterListIcon></FilterListIcon></BlankButton></li>
//         <li>
//             <div style={{height:'200px', width: '300px', backgroundColor:'pink', position:'absolute', right: '0', marginRight: '3rem'}}>
//                 <ul>
//                     <li>
//                         <select
//                         onChange={e => setFilterText(e.target.value)}>
//                             <option value=''>Filter Station </option>
//                             {items.map((item) =>
//                             <option>{item.station}</option>
//                             )}
//                         </select>
//                     </li>
//                     <li>
//                         <select
//                         onChange={e => setFilterText(e.target.value)}>
//                             <option value=''>Filter Dish</option>
//                             {items.map((item) =>
//                             <option>{item.dish}</option>
//                             )}
//                         </select>
//                     </li>
//                     <li>
//                         <TextField
//                         variant='filled'
//                         onChange={e => setFilterText(e.target.value)}
//                         sx={{
//                             "& .MuiFormLabel-root": {
//                                 color: 'black'
//                             },
//                             "& .MuiFormLabel-root.Mui-focused": {
//                                 color: 'black'
//                             },
//                             "& .MuiInputBase-root::after": {
//                                 borderBottom: '2px solid black'
//                             }
//                         }}>
//                         </TextField>
//                     </li>
//                 </ul>
//             </div>
//         </li>
//     </ul>
//     );
// };