// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { Button, Stack } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { useAuth } from '../../../Context/AuthContext';

// const NavBar = () => {

//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   }

//   return (
//     <Stack direction="row" spacing={1} sx={{ marginLeft: 'auto' }}>
//       <Button component={NavLink} to='/' color="inherit">Home</Button>
//       <Button component={NavLink} to='/about' color="inherit">About</Button>
//       <Button component={NavLink} to='/products' color="inherit">Products</Button>
//       <Button component={NavLink} to='/contact' color="inherit">Contact</Button>
//       <Button component={NavLink} to='/wishlist' color='inherit'>WishList</Button>

//       {user ? (
//         <>
//           <Button component={NavLink} to='/profile' color='inherit'>Profile</Button>
//           {user.email === 'surya@gmail.com' && (
//             <>
//               <Button component={NavLink} to='/admin' color='inherit'>Add New Item</Button>
//               <Button component={NavLink} to='/adminaccess' color='inherit'>Delete Item</Button>
//             </>
//           )}
//           <Button color='inherit' onClick={handleLogout}>Logout</Button>
//         </>
//       ) : (
//         <Button component={NavLink} to='/login' color='inherit'>Login</Button>
//       )}


//       <Button component={NavLink} to='/cart' color="inherit">
//         <ShoppingCartIcon />
//       </Button>
//     </Stack>
//   );
// };

// export default NavBar;
















import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAuth } from '../../../Context/AuthContext';

const NavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Stack direction="row" spacing={1} sx={{ marginLeft: 'auto' }}>
      {/* Common Links for All Users */}
      {user ? (
        user.email === 'surya@gmail.com' ? (
          // Show only for surya@gmail.com
          <>
            <Button component={NavLink} to='/inventory' color='inherit'>Inventory</Button>
            <Button component={NavLink} to='/orderdetails' color='inherit'>Order details</Button>
            <Button component={NavLink} to='/feedback' color='inherit'>Feedback</Button>
            <Button color='inherit' onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          // Links for other logged-in users
          <>
            <Button component={NavLink} to='/' color="inherit">Home</Button>
            <Button component={NavLink} to='/about' color="inherit">About</Button>
            <Button component={NavLink} to='/products' color="inherit">Products</Button>
            <Button component={NavLink} to='/contact' color="inherit">Contact</Button>
            <Button component={NavLink} to='/wishlist' color='inherit'>WishList</Button>
            <Button component={NavLink} to='/profile' color='inherit'>Profile</Button>
            <Button color='inherit' onClick={handleLogout}>Logout</Button>
            <Button component={NavLink} to='/cart' color="inherit">
              <ShoppingCartIcon />
            </Button>
          </>
        )
      ) : (
        // Links for not logged-in users
        <>
          <Button component={NavLink} to='/' color="inherit">Home</Button>
          <Button component={NavLink} to='/about' color="inherit">About</Button>
          <Button component={NavLink} to='/products' color="inherit">Products</Button>
          <Button component={NavLink} to='/contact' color="inherit">Contact</Button>
          <Button component={NavLink} to='/login' color='inherit'>Login</Button>
          <Button component={NavLink} to='/cart' color="inherit">
            <ShoppingCartIcon />
          </Button>
        </>
      )}

      
    </Stack>
  );
};

export default NavBar;

