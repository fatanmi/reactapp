pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''
            docker build -t myfirstbuld .
            docker images
            
            '''
      }
    }

  }
}