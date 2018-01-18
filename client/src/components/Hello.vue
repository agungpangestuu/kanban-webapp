<template>
  <q-layout
    ref="layout"
    :view="view"
    :left-breakpoint="leftBreakpoint"
    :right-breakpoint="rightBreakpoint"
    :reveal="reveal"
  >
    <q-toolbar slot="header" color="cyan-5">
      <q-toolbar-title>
        Kanban
        <span slot="subtitle">Realtime with firebase </span>
      </q-toolbar-title>
      <q-btn class="within-iframe-hide" flat @click="$refs.basicModal.open()" style="margin-right: 15px">
        <q-icon name="create" />
        New Task
      </q-btn>
      <q-modal ref= "basicModal" :content-css="{minWidth: '50vw', minHeight: '80vh'}">
        <q-modal-layout>
          <q-toolbar slot="header" color="cyan-5">
            <q-btn flat @click="$refs.basicModal.close()">
              <q-icon name="keyboard_arrow_left" />
            </q-btn>
            <div class="q-toolbar-title">
              Header
            </div>
          </q-toolbar>

          <!-- <q-toolbar slot="footer" color="cyan-5">
            <div class="q-toolbar-title">
              Footer
            </div>
          </q-toolbar> -->
          <div class="layout-padding">
            <h1>Create Task</h1>
            <q-field
              :count="7"
              :error="error2"
              helper="What's your Title Of task?"
              error-label="Hey, we got an error"
            >
              <q-input v-model="newTask.title" float-label="Title" color="cyan-5" />
            </q-field>
            <q-field
              icon="description"
              helper="Your awesome helper"
              :error="error2"
              error-label="We got an error"
            >
              <q-input v-model="newTask.descriptions" float-label="Descriptions" color="cyan-5" />
            </q-field>
            <q-field
              icon="filter_9_plus"
              helper="Your awesome helper"
              :error="error2"
              error-label="We got an error"
            >
              <q-input v-model="newTask.point" type="number" float-label="Point" color="cyan-5" />
            </q-field>
            <q-field
              icon="assignment_ind"
              helper="Your awesome helper"
              :error="error2"
              error-label="We got an error"
            >
              <q-input v-model="newTask.assigned" float-label="Assigned to" color="cyan-5" />
            </q-field>
            <br>
            <q-btn color="cyan-5" @click="$refs.basicModal.close()">Close</q-btn>
            <q-btn color="cyan-5" @click="createTask">Save</q-btn>

          </div>
        </q-modal-layout>
      </q-modal>
    </q-toolbar>

    <!-- <q-tabs slot="navigation" v-if="!hideTabs" color="cyan-4" inverted>
      <q-route-tab slot="title" color="red-6" icon="play_circle_outline" to="/" replace label="On Hold" />
      <q-route-tab slot="title" color="amber" icon="view_array" to="/todo" replace label="To Do" />
      <q-route-tab slot="title" color="light-blue-13" icon="pin_drop" to="/doing" replace label="Doing" />
      <q-route-tab slot="title" color="secondary" icon="done_all" to="/showcase/layout/floating-action-button" replace label="Done" />
    </q-tabs> -->




    <router-view/>


    <q-fixed-position corner="bottom-right" :offset="[16, 16]">
        <q-fab
          color="primary"
          icon="keyboard_arrow_up" direction="up"
          class="animate-pop"
        >
          <q-fab-action color="purple" @click="$refs.basicModal.open()" icon="create">
            <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">Create</q-tooltip>
          </q-fab-action>
          <q-fab-action color="secondary" @click="toast('alarm')" icon="alarm">
            <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">Alarm</q-tooltip>
          </q-fab-action>
        </q-fab>
      </q-fixed-position>
    <q-toolbar slot="footer" color="cyan-5">
      <q-toolbar-title>
        Footer
      </q-toolbar-title>
    </q-toolbar>
  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QSearch,
  QTabs,
  QRouteTab,
  QBtn,
  QIcon,
  QItemSide,
  QItemMain,
  QSideLink,
  QListHeader,
  QScrollArea,
  QFab,
  QFabAction,
  QTooltip,
  QFixedPosition,
  Dialog,
  Toast,
  QModal,
  QInput,
  QModalLayout,
  QField
} from 'quasar'
export default {
  name: 'ModalCreate',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QTabs,
    QRouteTab,
    QBtn,
    QIcon,
    QItemSide,
    QItemMain,
    QSideLink,
    QListHeader,
    QScrollArea,
    QFab,
    QFabAction,
    QTooltip,
    QFixedPosition,
    Dialog,
    Toast,
    QModal,
    QInput,
    QModalLayout,
    QField
  },
  data () {
    return {
      view: 'lHh Lpr lFf',
      reveal: false,
      leftScroll: true,
      rightScroll: true,
      leftBreakpoint: 996,
      rightBreakpoint: 1200,
      hideTabs: false,
      error: true,
      error2: false,
      loading: true,
      newTask: {
        title: '',
        descriptions: '',
        point: '',
        assigned: '',
        todo: false,
        onhold: true,
        doing: false,
        done: false
      }
    }
  },
  methods: {
    createTask () {
      this.$base.ref('task').push(this.newTask)
      this.newTask.title = ''
      this.newTask.descriptions = ''
      this.newTask.point = ''
      this.newTask.assigned = ''
      this.$refs.basicModal.close()
    }
  },
  created () {
    // do something after creating vue instance

  }
}
</script>
