import { Outlet,useNavigation } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  const navigation = useNavigation();

  const isLoding = navigation.state === 'loading';

  return (
    <>
      <MainNavigation />
      <main>
       {isLoding && <p style={{color:'red',textAlign:'center'}}>Is loading...</p>} 
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;