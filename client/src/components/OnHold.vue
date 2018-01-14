<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-3" >
        <big style="color: #ff5252"><q-icon name="create" /> OnHold</big>
        <!-- <div v-for="n in task" v-if="task.onhold"> -->
          <q-card inline color="red-12" v-for="n in task" v-if="n.onhold" :key="n.key">
            <q-card-title>
              {{n.title}}
              <!-- <span slot="subtitle">Subtitle</span> -->
              <q-icon slot="right" name="alarm" />
            </q-card-title>
            <q-card-main>
              {{n.point}}
              <br>
              {{n.assigned}}
            </q-card-main>
            <q-card-separator />
            <q-card-actions>
              <q-btn flat @click="detail(n)">Show Detail</q-btn>
            </q-card-actions>
          </q-card>
        <!-- </div> -->
      </div>
      <div class="col-md-3">
        <big style="color: #ffc108"><q-icon name="create" />Todo</big>
        <q-card inline color="amber" v-for="n in task"  v-if="n.todo" :key="n.key">
          <q-card-title>
            {{n.title}}
            <!-- <span slot="subtitle">Subtitle</span> -->
            <q-icon slot="right" name="alarm" />
          </q-card-title>
          <q-card-main>
            {{n.point}}
            <br>
            {{n.assigned}}
          </q-card-main>
          <q-card-separator />
          <q-card-actions>
            <q-btn flat @click="detail(n)">Show Detail</q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-md-3">
        <big style="color: #04b0ff"><q-icon name="create" />Doing</big>
        <q-card inline color="light-blue-13" v-for="n in task" v-if="n.doing" :key="n.key">
          <q-card-title>
            {{n.title}}
            <!-- <span slot="subtitle">Subtitle</span> -->
            <q-icon slot="right" name="alarm" />
          </q-card-title>
          <q-card-main>
            {{n.point}}
            <br>
            {{n.assigned}}
          </q-card-main>
          <q-card-separator />
          <q-card-actions>
            <q-btn flat @click="detail(n)">Show Detail</q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-md-3" >
        <big style="color: #26a699"><q-icon name="create" />Done</big>
        <q-card inline color="secondary" v-for="n in task" v-if="n.done" :key="n.key">
          <q-card-title>
            {{n.title}}
            <!-- <span slot="subtitle">Subtitle</span> -->
            <q-icon slot="right" name="alarm" />
          </q-card-title>
          <q-card-main>
            {{n.point}}
            <br>
            {{n.assigned}}
          </q-card-main>
          <q-card-separator />
          <q-card-actions>
            <q-btn flat @click="detail(n)">Show Detail</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <q-modal ref= "basicModal" :content-css="{minWidth: '50vw', minHeight: '80vh'}">
      <q-modal-layout>
        <q-toolbar slot="header" color="cyan-5">
          <q-btn flat @click="$refs.basicModal.close()">
            <q-icon name="keyboard_arrow_left" />
          </q-btn>
          <div class="q-toolbar-title">
            Details
          </div>
        </q-toolbar>
        <br>
        <p>
          <label bold>Task Descriptions : </label>
          <br>
          <small>{{openDetail.descriptions}}</small>
          <br>
          <label bold>Point: </label>
          <br>
          <small>{{openDetail.point}}</small>
          <br>
          <label bold>status : </label>
          <br>
          <small v-if="openDetail.onhold">On Hold</small>
          <small v-if="openDetail.todo">Todo</small>
          <small v-if="openDetail.doing">Doing</small>
          <small v-if="openDetail.done">Done</small>
        </p>

        <q-toolbar slot="footer" color="cyan-5">
          <div class="q-toolbar-title" v-if="openDetail.onhold">
            <q-btn flat @click="remove(openDetail['.key'])">
              <q-icon name="keyboard_arrow_left" />
              Delete
            </q-btn>
            <q-btn flat @click="todo(openDetail)">
              <q-icon name="keyboard_arrow_left" />
              TODO
            </q-btn>
          </div>
          <div class="q-toolbar-title" v-if="openDetail.todo">
            <q-btn flat @click="hold(openDetail)">
              <q-icon name="keyboard_arrow_left" />
              On Hold
            </q-btn>
            <q-btn flat @click="remove(openDetail['.key'])">
              <q-icon name="keyboard_arrow_left" />
              Delete
            </q-btn>
            <q-btn flat @click="doing(openDetail)">
              <q-icon name="keyboard_arrow_left" />
              Doing
            </q-btn>
          </div>
          <div class="q-toolbar-title" v-if="openDetail.doing">
            <q-btn flat @click="todo(openDetail)">
              <q-icon name="keyboard_arrow_left" />
              TODO
            </q-btn>
            <q-btn flat @click="remove(openDetail['.key'])">
              <q-icon name="keyboard_arrow_left" />
              Delete
            </q-btn>
            <q-btn flat @click="done(openDetail)">
              <q-icon name="keyboard_arrow_left" />
              DONE
            </q-btn>
          </div>
          <div class="q-toolbar-title" v-if="openDetail.done">
            <q-btn flat @click="doing(openDetail)">
              <q-icon name="keyboard_arrow_left" />
              Doing
            </q-btn>
            <q-btn flat @click="remove(openDetail['.key'])">
              <q-icon name="keyboard_arrow_left" />
              Delete
            </q-btn>

          </div>
        </q-toolbar>

          <!-- <q-btn color="cyan-5" @click="$refs.basicModal.close()">Close</q-btn>
          <q-btn color="cyan-5" @click="createTask">Save</q-btn> -->

      </q-modal-layout>
    </q-modal>
  </div>
</template>

<script>
import {
  QCard,
  QCardTitle,
  QCardMedia,
  QCardActions,
  QCardSeparator,
  QCardMain,
  QList,
  QBtn,
  QIcon,
  QModal,
  QModalLayout,
  QToolbar,
  QField
} from 'quasar'
export default {
  name: 'OnHold',
  components: {
    QCard,
    QCardTitle,
    QCardMedia,
    QCardActions,
    QCardSeparator,
    QCardMain,
    QList,
    QBtn,
    QIcon,
    QModal,
    QModalLayout,
    QToolbar,
    QField
  },
  data () {
    return {
      data: [],
      task: '',
      openDetail: {},
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  firebase () {
    return {
      task: this.$base.ref('task')
    }
  },
  methods: {
    detail (n) {
      console.log(this.task)
      this.$refs.basicModal.open()
      // if (n.todo) {
      //   this.openDetail.log =  'todo'
      // }
      // else if (n.onhold) {
      //   this.openDetail.log =  'onhold'
      // }
      // else if (n.doing) {
      //   this.openDetail.log =  'doing'
      // }
      // else {
      //   this.openDetail.log =  'done'
      // }
      this.openDetail = n
    },
    todo (data) {
      let key = data['.key']
      this.$base.ref('task').child(key).update({
        todo: true,
        doing: false,
        done: false,
        onhold: false
      })
      this.$refs.basicModal.close()
    },
    doing (data) {
      let key = data['.key']
      this.$base.ref('task').child(key).update({
        todo: false,
        doing: true,
        done: false,
        onhold: false
      })
      this.$refs.basicModal.close()
    },
    remove (key) {
      this.$base.ref('task').child(key).remove()
      this.$refs.basicModal.close()
    },
    hold (data) {
      let key = data['.key']
      this.$base.ref('task').child(key).update({
        todo: false,
        doing: false,
        done: false,
        onhold: true
      })
      this.$refs.basicModal.close()
    },
    done (data) {
      let key = data['.key']
      this.$base.ref('task').child(key).update({
        todo: false,
        doing: false,
        done: true,
        onhold: false
      })
      this.$refs.basicModal.close()
    }
  },
  created () {
    // do something after creating vue instance
    console.log('aksnkanskak')
  }
}
</script>

<style lang="css">
  .q-tabs-inverted .q-tabs-head {
    background: white;
  }
  .col-md-3 {
    margin-top: 20px;
  }
  big.q-icon{
    margin-right: 20px;
  }
  big {
    margin-left: 30px;
  }
  .inline-block {
    display: block !important;
  }
  label {
    margin-left: 10px;
  }
  small {
    margin-left: 20px;
  }
</style>