pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''
            docker build -t haryorbami/react:$BUILD_NUMBER .
        '''
            
           
      }
    }
    stage('Push to Docker hub'){
      steps{
        withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
      
      sh '''
          docker login -u $USERNAME -p $PASSWORD
          docker push haryorbami/react:$BUILD_NUMBER
        '''
        }
      }  
      }
    }

  }
