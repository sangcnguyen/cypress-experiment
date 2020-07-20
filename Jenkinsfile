pipeline {
  agent {
    docker {
      image 'cypress/browsers:node12.18.0-chrome83-ff77'
    }

  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
        sh 'npm run cypress:run'
      }
    }

  }
}