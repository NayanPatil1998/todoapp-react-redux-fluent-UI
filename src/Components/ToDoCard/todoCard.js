import React from "react";
import {Card} from '@uifabric/react-cards'
import { FontSizes, FontWeights, Icon, Image, Persona, Stack, Text } from "@fluentui/react";

function TodoCard() {
    const cardTokens = { childrenMargin: 12, maxWidth: 450  };
    const siteTextStyles= {
        root: {
          fontSize: FontSizes.size28,
          fontWeight: FontWeights.semibold,
        },
      };
      const descriptionTextStyles = {
        root: {
          color: '#333333',
          fontWeight: FontWeights.semibold,
        },
      };
      const helpfulTextStyles = {
        root: {
          color: '#333333',
          fontWeight: FontWeights.regular,
        },
      };
      
  return (
    <div className='' style={{width:"100%"}}>
      <Card className="ms-depth-16"
        tokens={cardTokens}
      >
        <Card.Section>
          <Text variant="small" styles={siteTextStyles}>
            Contoso
          </Text>
          <Text styles={descriptionTextStyles}>
            Contoso Denver expansion design marketing hero guidelines
          </Text>
          <Text variant="small" styles={descriptionTextStyles}>
              Tuesday 2:00-4:30 pm
            </Text>
          <Text variant="small" styles={helpfulTextStyles}>
            Is this recommendation helpful?
          </Text>
        </Card.Section>
        
      </Card>
    </div>
  );
}

export default TodoCard;
