import React, { useState } from 'react';
import { AutoComplete, Flex } from 'antd';
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
const SearchComp = () => {
  const [options, setOptions] = useState([]);
  const getPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  return (
    <Flex vertical gap={12}>
      <AutoComplete
        options={options}
        style={{
          width: 200,
        }}
        placeholder="Borderless"
        onSearch={(text) => setOptions(getPanelValue(text))}
        // onSelect={globalThis.console.log}
        variant="borderless"
      />
    </Flex>
  );
};
export default SearchComp;