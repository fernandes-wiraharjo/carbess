import Wrapper from './wrapper/wrapper';
import { LeftColumn, RightColumn } from './columns/column.jsx';
import Filter from './filter/filter';
import ListItem from './ListItem';
import CarListPaging from '../Others/Paging';
import './ContentMain.css';

export default function ContentMain({data}) {
    return (
        <div className='ContentMain'>
            <Wrapper>
                <LeftColumn>
                    <Filter data={data} />
                </LeftColumn>
                <RightColumn>
                    <ListItem queryData={data} />
                    <CarListPaging />
                </RightColumn>
            </Wrapper>
            <hr />
        </div>
    );
}
