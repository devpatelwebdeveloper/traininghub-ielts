import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import ListItem from "../../molecules/NumberedListItem/NumberedListItem";

const StyledOl = styled.ol`
  list-style: none;
  margin-top: 20px;
  padding: 0;
  border-left: 3px solid ${Styles.Colors.BrandGrey};
  counter-reset: numbered-list 10;
  margin-left: 10px;
  position: relative;
`;

export default class NumberedTimeLine extends React.Component {
  static propTypes = {
    lists: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  };
  static defaultProps = {
    lists: "",
    title: "",
  };
  render() {
    const { title, lists } = this.props;
    return (
      <>
        <StyledOl start="0">
          {lists.map((list) => (
            <ListItem title={list.title} text={list.text} />
          ))}
        </StyledOl>
      </>
    );
  }
}
