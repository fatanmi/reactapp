pipeline {
  environment {
    registry = "haryorbami/react"
    registryCredential = 'dockerhub'
  }
  agent any
  stages {
    stage('Lint file') {
      steps {
        sh 'make lint'     
      }
    }
    stage('Build') {
      steps {
        sh '''
           docker build -t haryorbami/react:$BUILD_NUMBER .
                                  
        '''     
      }
    }
    stage('Push to Docker hub') {
      steps {
        withDockerRegistry([url: "", credentialsId: 'dockerhub']) {
        
        sh 'docker push haryorbami/react:$BUILD_NUMBER'
        }
        }

      }
    stage('Remove Unused docker image') {
        steps{
          sh 'docker rmi $registry:$BUILD_NUMBER'
          
        }
    }
  
    stage('Update Kube Config'){
            steps {
                withAWS(region:'us-east-1',credentials:'awscredentials') {
                    sh 'sudo aws eks --region us-east-1 update-kubeconfig --name Capstone1'                    
                }
            }
    }
    stage('Deploy Updated Image to Cluster'){
        steps {
            sh '''
                export IMAGE="$registry:$BUILD_NUMBER"
                sed -ie "s~IMAGE~$IMAGE~g" cluster-resources/deployment.yml
                sudo kubectl apply -f ./cluster-resources
                '''
        }
    }
    
}
}



