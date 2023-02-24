import { Grid } from 'react-loader-spinner';

export function Loader() {
  return (
    <li>
      <Grid
        height="200"
        width="200"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </li>
  );
}
