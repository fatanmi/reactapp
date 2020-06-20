pipeline {
  environment {
    registry = "haryorbami/docker-test"
    registryCredential = 'dockerhub'
  }
  agent any
  stages {
    stage('Build') {
      // steps {
      //   sh '''
      //       docker build -t myreactimage .
            
            
      //       '''
      // }
    }
    stage('Login to Docker hub'){
      steps{
        withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: registryCredential, usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
         sh 'docker login -u $USERNAME -p $PASSWORD'
         
        }
           
      }
    }

  }
}