pipeline {
  environment {
    registry="haryorbami/docker-test"
    registryCredential='dockerhub'
  }
  agent any
  stages {
    stage('Build') {
      steps {
        script{
            docker.build registry + "$BUILD_NUMBER"
        }
            
           
      }
    }
    stage('Push to Docker hub'){
      steps{
        withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: registryCredential, usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
        script{
          docker login -u $USERNAME -p $PASSWORD
                docker.push registry + "$BUILD_NUMBER"

        }
        }
           
      }
    }

  }
}