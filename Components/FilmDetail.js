import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image} from 'react-native'
import {getFilmDetailForApi} from '../API/TMDBApi'
import {getImageFromApi} from '../API/TMDBApi'
//import {NavigationActions} from 'react-navigation'
class FilmDetail extends React.Component
{

    constructor(props){
        super(props)
        this.state = {
            film: undefined,
            isLoading: true
        },
        this.navigation = props.navigation;
    }

    componentDidMount(){
        getFilmDetailForApi(this.props.navigation.state).then(data => {
            this.setState({
                film: data,
                isLoading: false
            })
        })
    }

    //https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg
    _displayFilm() {
        const { film } = this.state
        if (film != undefined) {
          return (
            <ScrollView style={styles.scrollview_container}>
              <Image
                style={styles.image}
                source={{uri: getImageFromApi(film.backdrop_path)}}
              />
              <Text style={styles.title_text}>{film.title}</Text>
              <Text style={styles.description_text}>{film.overview}</Text>
              <Text style={styles.default_text}>Sorti le {film.release_date}</Text>
              <Text style={styles.default_text}>Note : {film.vote_average} / 10</Text>
              <Text style={styles.default_text}>Nombre de votes : {film.vote_count}</Text>
              <Text style={styles.default_text}>Budget : {film.budget}</Text>
            </ScrollView>
          )
        }
      }

    _displayLoading() {
        if (this.state.isLoading) {
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size='large' />
            </View>
          )
        }
    }

    render()
    {
        //const idFilm = this.props.navigation.getParam('idFilm')
        return(
            <View style={StyleSheet.main_container}>
                {this._displayFilm()}
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },

    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      },

    scrollView_container: {
          flex: 1
      },

    image: {
      height: 169,
      margin: 5
    }
})

export default FilmDetail