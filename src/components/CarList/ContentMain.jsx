import Wrapper from './wrapper/wrapper';
import { LeftColumn, RightColumn } from './columns/column.jsx';
import Filter from './filter/filter';
import { SlSort } from '../Inputs/Selects';
import ListItem from './ListItem';
import './ContentMain.css';

export default function ContentMain() {
    return (
        <div className='ContentMain'>
            <Wrapper>
                <LeftColumn>
                    <Filter />
                </LeftColumn>
                <RightColumn>
                    <div id="header">
                        <b>Cari Mobil Bekas Pontianak (4.216 unit)</b>
                        <SlSort />
                    </div>
                    <ListItem />
                </RightColumn>
            </Wrapper>
            <hr />
        </div>
    );
}
