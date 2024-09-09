import { Layout, Menu } from 'antd';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
const { Header } = Layout;

const App = () => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" style={{ float: 'left', color: 'white', fontSize: '24px' }}> Path of the Norns </div>
        <Menu theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ justifyContent: 'flex-end' }} >
          <NavBar/>
        </Menu>
      </Header>
      <div style={{ marginTop: 64 }}>
        {/* Aquí irá el contenido principal de la página */}
      </div>
      <ItemListContainer greeting={'Welcome!'}/>
    </Layout>
  );
};

export default App;
