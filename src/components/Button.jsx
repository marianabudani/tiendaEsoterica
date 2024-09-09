import { Button, Dropdown, Space } from 'antd';
const items = [
    {
      key: '1',
      label: (
        <a rel="noopener noreferrer" href="#">
          Tarot
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a rel="noopener noreferrer" href="#">
          Herbs
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a rel="noopener noreferrer" href="#">
          Books
        </a>
      ),
    },
  ];
const App = () => (
  <Space direction="vertical">
    <Space wrap>
      <Dropdown 
        menu={{items}}
        placement="bottom"
      >
        <Button>Categories</Button>
      </Dropdown>
    </Space>
  </Space>
);
export default App;