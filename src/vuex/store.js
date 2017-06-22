
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    notes:[],
    activeNote:{}
}

const mutations = {
    ADD_NOTE(state){
        var newNote = {
            text:'new Text',
            favorites:false
        }

        state.notes.push(newNote);
        state.activeNote = newNote;
    },
    EDIT_NOTE(state,text){
        state.activeNote.text = text;
    },
    SET_ACTIVE_NOTE(state,item){
        const active = state.notes.find(note => note===item);
        state.activeNote = active;
    },
    TOGGLE_FAVORITE(state){
        state.activeNote.favorites = !state.activeNote.favorites
    },
    DELETE_NOTE(state){
        let index = '';
        for(let i=0,len=state.notes.length;i<len;i++){
            if(state.notes[i]===state.activeNote){
                index = i;
            }
        }
        state.notes.splice(index,1);
        if(state.notes.length>=1){
            state.activeNote = state.notes[0];
        }
    }
}

const actions = {
    addNote({commit}){
        commit('ADD_NOTE');
    },
    editNote({commit},text){
        commit('EDIT_NOTE',text);
    },
    setActiveNote({commit},note){
        commit('SET_ACTIVE_NOTE',note)
    },
    toggleFavorites({commit}){
        commit("TOGGLE_FAVORITE")
    },
    deleteNote({commit}){
        commit('DELETE_NOTE')
    }
}

const getters = {
    notes:state=>state.notes,
    activeNote:state=>state.activeNote
}


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

