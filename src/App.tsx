import React from 'react';
import Pagination from './Pagination';
import Skeleton from './Skeleton';
function App() {
  return (
    <div>
      {/* <Skeleton count={4}></Skeleton> */}
      <Pagination count={5} page={1} onPageChange={function (page: number): void {
        console.log(page);
      }} />
    </div>
  );
}

export default App;
