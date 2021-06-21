pipeline {
  agent any
  
  stages {
    stage('first') {
      steps {
        echo 'first, non-parallel stage'
      }
    }

    stage('top-parallel') {
      parallel {
        stage('first-parallel') {
          steps {
            echo 'First of the parallel stages without further nesting'
            sleep 1
          }
        }
        stage('second-parallel') {
          parallel {
            stage('first-nested-parallel') {
              steps {
                 echo 'the first of the nested parallel stages'
                 sleep 1
              }
           }
           stage('second-nested-parallel') {
              steps {
                 echo 'the second of the nested parallel stages'
                 sleep 1
              }
           }
        }
     }
  }
}
  }
}