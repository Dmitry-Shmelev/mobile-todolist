import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getLists } from './action';
import ListItem from './ListItem';
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
    const { list } = this.props;
    debugger;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>F</Text>
            </View>
            <Text style={styles.avatarName}>Frank</Text>
          </View>
          <View style={styles.headerRight}>
            <Icon name='bell-o' size={25} color='#ffffff' />
            <Icon name='comment-o' size={25} color='#ffffff' />
            <Icon name='search' size={25} color='#ffffff' />
          </View>
        </View>
        <View style={styles.content}>
          <FlatList
            data={list.listArray}
            renderItem={({ item }) => <ListItem text={item.name} />}
          />
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