import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import Albums from "./Albums";
import Photos from "./Photos";
import IAlbums from "../models/Albums";
import IUser from "../models/User";
import { IRootState } from "../reducers/RootReducer";
import { MDBContainer, MDBRow } from "mdbreact";
import IPhotos from "../models/Photos";
import runSaga from "../store/saga/injectSaga";
import { getPhotos } from "../sagas/PhotosSaga";

export interface IProps {
  user: IUser;
  albums: IAlbums;
  photos: IPhotos;
}

export interface IState {
  mdAlbums: number;
  mdPhotos: number;
  classPhotos: string;
  classAlbumsMobile: string;
  toSearch: string;
  title: string;
  albumId: number;
}

class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      mdAlbums: 12,
      mdPhotos: 0,
      classPhotos: "d-none",
      classAlbumsMobile: "",
      title: "",
      toSearch: "",
      albumId: 0
    };
  }

  public displayPhotos = (albumId: number, title: string) => {
    if (this.state.mdPhotos === 0) {
      window.scrollTo(0, 0);
    }

    runSaga(getPhotos, [albumId]);

    this.setState({
      ...this.state,
      mdAlbums: 6,
      mdPhotos: 6,
      classPhotos: "",
      classAlbumsMobile: "hide-albums-mobile",
      title: title,
      albumId: albumId
    });
  };

  public displayPhotos1 = (search: string) => {
    // if(this.state.mdPhotos === 0) {
    //     window.scrollTo(0, 0);
    // }

    // runSaga(getPhotos, [albumId]);
    console.log("search", search);
    console.log("this.state", this.state);

    this.setState({
      ...this.state,
      mdAlbums: 6,
      mdPhotos: 6,
      toSearch: search,
      classPhotos: "",
      classAlbumsMobile: "hide-albums-mobile"
    });
  };

  public displayAlbums = () => {
    this.setState({
      mdAlbums: 12,
      mdPhotos: 0,
      classPhotos: "d-none",
      classAlbumsMobile: ""
    });
  };

  public render() {
    const { user, albums, photos } = this.props;

    return user.isLogin ? (
      <div>
        <Header home />
        <MDBContainer className="tangerine-container" fluid>
          <MDBRow>
            <Albums
              albums={albums}
              md={this.state.mdAlbums}
              displayPhotos={this.displayPhotos}
              classAlbumsMobile={this.state.classAlbumsMobile}
            />
            <Photos
              photos={photos}
              md={this.state.mdPhotos}
              className={this.state.classPhotos}
              title={this.state.title}
              toSearch={this.state.toSearch}
              displayAlbums={this.displayAlbums}
              displayPhotos1={this.displayPhotos1}
            />
          </MDBRow>
        </MDBContainer>
        <Footer />
      </div>
    ) : (
      <div></div>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    user: state.user,
    albums: state.albums,
    photos: state.photos
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
