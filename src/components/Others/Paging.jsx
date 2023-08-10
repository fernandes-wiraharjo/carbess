import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Paging.css';

export default function Paging() {
  return (
    <section className='Paging'>
        <Stack spacing={2}>
            <Pagination count={10} color="primary" />
        </Stack>
    </section>
  );
}