import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getLists } from './action';
import Header from './Header';
import ListItem from './ListItem';
import CreateButton from './CreateButton';
import styles from './style';


class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getLists();
  }

  onClickListItem = (value) => {
    this.props.setCurList({
      _id: value._id,
      name: value.name,
    });
    this.props.getTasks(value._id);
    this.props.history.push(`/app/list/${value._id}`);

  };

  onClickFilterItem = (filter) => {
    let filterUpper = filter;
    filterUpper = filterUpper[0].toUpperCase() + filterUpper.substr(1);
    this.props.setCurList({
      _id: filter,
      name: filterUpper,
    });
    this.props.getTasks(filter);
    this.props.history.push(`/app/list/${filter}`);
  }

  render() {
    const filterArray = [
      {
        'name': 'Inbox',
        'icon': 'inbox'
      },
      {
        'name': 'Today',
        'icon': 'calendar-o'
      },
      {
        'name': 'Week',
        'icon': 'calendar'
      },
      {
        'name': 'Starred',
        'icon': 'star-o'
      }
    ];
    const { listArray } = this.props.list;

    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.content}>
          <FlatList
            data={filterArray.concat(listArray)}
            renderItem={({ item }) => <ListItem text={item.name} icon={item.icon || 'list'} />}
            keyExtractor={(item, index) => 'listItem_' + (item._id || ('filter_' + item.name))}
          />
          <CreateButton />
        </View>

      </SafeAreaView >
    );
  }
};
List.propTypes = {
  list: PropTypes.object.isRequired,
  getLists: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  list: state.list,
});
const mapDispatchToProps = dispatch => ({
  getLists: () => dispatch(getLists()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);