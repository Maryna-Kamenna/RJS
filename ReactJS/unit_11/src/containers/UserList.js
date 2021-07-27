import { connect } from "react-redux";
import List from '../components/List';

function mapStateToProps(state) { //mapStateToProps - формирует данные для вывода
    const { users } = state;
    return { user: users };
}

export default connect(mapStateToProps, null)(List);
// connect  это подписка на хранилище- если в нем что-то
// изменяется -он оповещает
