pipeline {
  agent any
  stages {
    // stage('Build') {
    //   steps {
    //     sh '''
    //         docker build -t myfirstbuld .
    //         docker images
            
    //         '''
    //   }
    // }
    stage('Push to docker hub'){
      steps{
        withCredentials([string(credentialsId: 'dockerhub', usernameVariable: 'USERNAME',
            passwordVariable: 'PASSWORD')])
            {
              sh 'docker login -u $USERNAME -p $PASSWORD'
              echo ''
            }
      }
    }

  }
}