import { useState } from 'react';

const osiModel = {
  'physical layer': {
    question: 'What is the purpose of the Physical Layer?',
    answer: 'The Physical Layer deals with the physical transmission of data over the network.',
    description: `The Physical Layer is responsible for the physical 
transmission of data over the network.`,
    examples: `Examples include Ethernet cables, fiber optic cables, and wireless signals.`
  },
  'data link layer': {
    question: `What is the purpose of the Data Link Layer?`,
    answer: 'The Data Link Layer provides error-free transmission of data frames between two nodes.',
    description: `The Data Link Layer ensures error-free transmission of 
data frames between two nodes.`,
    examples: 'Examples include Ethernet frames, MAC addresses, and switches.'
  },
  'network layer': {
    question: 'What is the purpose of the Network Layer?',
    answer: 'The Network Layer handles logical addressing and routing of data packets.',
    description: `The Network Layer handles logical addressing 
and routing of data packets.`,
    examples: 'Examples include IP addresses, routers, and the Internet Protocol (IP).'
  },
  'transport layer': {
    question: 'What is the purpose of the Transport Layer?',
    answer: 'The Transport Layer ensures reliable delivery of data segments between end systems.',
    description: `The Transport Layer ensures reliable delivery of data 
segments between end systems.`,
    examples: `Examples include TCP (Transmission Control Protocol) and
UDP (User Datagram Protocol). Well-known ports for common protocols are: 
HTTP (80), FTP (20, 21), SMTP (25), and DNS (53).`
  },
  'session layer': {
    question: 'What is the purpose of the Session Layer?',
    answer: 'The Session Layer establishes, manages, and terminates sessions between applications.',
    description: `The Session Layer establishes, manages, and terminates sessions between 
applications.`,
    examples: 'Examples include session management protocols and APIs.'
  },
  'presentation layer': {
    question: 'What is the purpose of the Presentation Layer?',
    answer: 'The Presentation Layer deals with data formatting, encryption, and compression.',
    description: `The Presentation Layer deals with data formatting, 
encryption, and compression.`,
    examples: `Examples include MIME (Multipurpose Internet Mail Extensions) 
and SSL/TLS (Secure Sockets Layer/Transport Layer Security).`
  },
  'application layer': {
    question: 'What is the purpose of the Application Layer?',
    answer: 'The Application Layer provides network services to the end-user applications.',
    description: `The Application Layer provides network services to the end-user applications.`,
    examples: `Examples include HTTP (Hypertext Transfer Protocol), 
FTP (File Transfer Protocol), 
and SMTP (Simple Mail Transfer Protocol). 
Well-known ports for common protocols are: HTTP (80), 
FTP (20, 21), SMTP (25), and DNS (53).`
  }
};

export default function Home() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim().toLowerCase();
  
    // Check for empty query
    if (trimmedQuery === '') {
      setResponse('Please enter a query.');
      return;
    }
  
    // Check for invalid characters in query
    const regex = /^[a-z0-9\s]+$/;
    if (!regex.test(trimmedQuery)) {
      setResponse('Invalid characters in query. Please only use alphanumeric characters and spaces.');
      return;
    }
  
    // Identify spaces
    const spaces = trimmedQuery.split(' ').length - 1;
  
    // Identify new lines
    const newLines = trimmedQuery.split('\n').length - 1;
  
    if (trimmedQuery in osiModel) {
      const layer = osiModel[trimmedQuery];
      const fullResponse = `${layer.description}\n\n\n${layer.examples}\n\n `;
      setResponse(fullResponse);
    } else {
      setResponse("I'm sorry, I don't have information about that yet or you typed something wrong.");
    }
  
    setQuery('');
  };
  

  return (
    <div className="container">
      <h1 className="title">OSI Model Meaning</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your query"
          className="input"
        />
        <button type="submit" className="button">Submit</button>
      </form>

      {response && (
        <div className="response">
          <pre>{response}</pre>
        </div>
      )}

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: #fff;
        }

        .title {
          font-size: 24px;
          margin-bottom: 20px;
          color: #333;
        }

        form {
          display: flex;
          margin-bottom: 20px;
        }

        .input {
          padding: 10px;
          margin-right: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px;
          width: 300px;
        }

        .button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #4caf50;
          border: none;
          color: white;
          border-radius: 4px;
          cursor: pointer;
        }

        .response {
          margin-top: 20px;
          background-color: #f5f5f5;
          padding: 20px;
          border-radius: 4px;
          text-align: left;
          max-width: 600px;
          word-wrap: break-word;
          white-space: pre-wrap;
          color: #333;
          z-index: 1;
          position: relative;
        }
      `}</style>
    </div>
  );
}
