/* eslint-disable react/prop-types */
import { Typography } from 'antd';
const {Text} = Typography;
const ItemListContainer = ({greeting}) => {
  return (
    <>
        <Text type="warning">{greeting}</Text>
    </>
  )
}

export default ItemListContainer